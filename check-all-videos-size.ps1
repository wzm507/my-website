# 检查各个位置的视频文件大小
$videoPaths = @(
    "public\videos\2.mp4",  # 原始上传的新视频
    "videos\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4",
    "dist\videos\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4",
    "dist\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4",
    "dist\assets\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4",
    "public\assets\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4",
    "src\assets\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4"
)

Write-Host "正在检查视频文件大小...\n"

foreach ($path in $videoPaths) {
    if (Test-Path -Path $path) {
        $file = Get-Item -Path $path
        $sizeMB = [math]::Round($file.Length / 1MB, 2)
        Write-Host "文件: $path"
        Write-Host "大小: $sizeMB MB\n"
    } else {
        Write-Host "文件不存在: $path\n"
    }
}

Write-Host "检查完成!"