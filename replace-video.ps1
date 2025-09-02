# Simple video replacement script using only ASCII characters
$newVideoPath = "public\videos\2.mp4"
$originalFileName = "EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4"

# Check if new video exists
if (Test-Path -Path $newVideoPath) {
    Write-Host "Found new video file: $newVideoPath"
    
    # Get file size
    $newVideo = Get-Item -Path $newVideoPath
    $sizeMB = [math]::Round($newVideo.Length / 1MB, 2)
    Write-Host "New video size: $sizeMB MB"
    
    # Target locations to replace
    $targets = @(
        "videos\$originalFileName",
        "dist\videos\$originalFileName",
        "dist\$originalFileName",
        "dist\assets\$originalFileName",
        "public\assets\$originalFileName",
        "src\assets\$originalFileName"
    )
    
    # Replace videos
    foreach ($target in $targets) {
        $dir = Split-Path -Path $target -Parent
        if (-not (Test-Path -Path $dir)) {
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
            Write-Host "Created directory: $dir"
        }
        Copy-Item -Path $newVideoPath -Destination $target -Force
        Write-Host "Replaced: $target"
    }
    
    Write-Host "\nVideo replacement completed successfully!"
} else {
    Write-Host "ERROR: Cannot find new video file at $newVideoPath"
    exit 1
}