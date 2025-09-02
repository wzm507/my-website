import { exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import { statSync, existsSync } from 'fs';

const execAsync = promisify(exec);

// 源视频文件路径
const inputFilePath = join(process.cwd(), 'videos', 'EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4');
// 输出文件路径
const outputFilePath = join(process.cwd(), 'videos', 'EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025_compressed.mp4');

// 检查输入文件是否存在
if (!existsSync(inputFilePath)) {
  console.error('源视频文件不存在:', inputFilePath);
  process.exit(1);
}

// 获取输入文件大小
const inputStats = statSync(inputFilePath);
const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);
console.log(`源视频大小: ${inputSizeMB} MB`);

// 检查系统是否安装了ffmpeg
async function checkFFmpeg() {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    return false;
  }
}

// 使用ffmpeg压缩视频
async function compressWithFFmpeg() {
  try {
    console.log('开始使用ffmpeg压缩视频...');
    
    // 构建ffmpeg命令
    // 使用crf 28和较低的比特率来确保视频大小在100MB以内
    const command = `ffmpeg -i "${inputFilePath}" -c:v libx264 -crf 28 -maxrate 1M -bufsize 2M -c:a aac -b:a 128k "${outputFilePath}"`;
    
    // 执行命令
    const { stdout, stderr } = await execAsync(command);
    
    // 输出结果
    console.log('视频压缩完成!');
    
    // 获取输出文件大小
    const outputStats = statSync(outputFilePath);
    const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
    console.log(`压缩后视频大小: ${outputSizeMB} MB`);
    
    return true;
  } catch (error) {
    console.error('使用ffmpeg压缩视频时出错:', error.message);
    return false;
  }
}

// 主函数
async function main() {
  // 检查是否安装了ffmpeg
  const hasFFmpeg = await checkFFmpeg();
  
  if (hasFFmpeg) {
    // 尝试使用ffmpeg压缩
    const success = await compressWithFFmpeg();
    
    if (success) {
      console.log('视频压缩成功!');
    } else {
      console.log('使用ffmpeg压缩失败。');
    }
  } else {
    console.log('系统未安装ffmpeg，无法直接压缩视频。');
    console.log('以下是一些替代方案:');
    console.log('1. 手动安装ffmpeg后再运行此脚本');
    console.log('2. 使用在线视频压缩工具');
    console.log('3. 复制此视频文件并使用视频编辑软件压缩');
    console.log('\n如果你能访问ffmpeg，以下是压缩命令示例:');
    console.log(`ffmpeg -i "${inputFilePath}" -c:v libx264 -crf 28 -maxrate 1M -bufsize 2M -c:a aac -b:a 128k "${outputFilePath}"`);
  }
}

// 运行主函数
main().catch(err => {
  console.error('执行过程中出错:', err);
  process.exit(1);
});