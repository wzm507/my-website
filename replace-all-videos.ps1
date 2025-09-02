# Script to find and replace all EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4 files with 2.mp4

# Set file names
$oldVideoName = "EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4"
$newVideoName = "2.mp4"

Write-Host "Starting video file replacement process...\n"

# 1. Find all old video files
Write-Host "Searching for all $oldVideoName files..."
$oldVideoPaths = Get-ChildItem -Path $PSScriptRoot -Recurse -Include $oldVideoName -ErrorAction SilentlyContinue

if ($oldVideoPaths.Count -eq 0) {
    Write-Host "No $oldVideoName files found.\n"
} else {
    Write-Host "Found the following $oldVideoName files:"
    $oldVideoPaths | ForEach-Object {
        Write-Host "- $($_.FullName)"
    }
    Write-Host ""
    
    # 2. Get the source path of the new video file
    $newVideoSource = Join-Path -Path $PSScriptRoot -ChildPath "public\videos\$newVideoName"
    
    if (Test-Path -Path $newVideoSource) {
        # 3. Delete old video files and copy new video files
        Write-Host "Starting video file replacement..."
        
        foreach ($oldVideoPath in $oldVideoPaths) {
            Write-Host "Processing: $($oldVideoPath.FullName)"
            
            # Delete old video file
            Remove-Item -Path $oldVideoPath.FullName -Force
            Write-Host "  - Old video file deleted"
            
            # Copy new video file to the same location
            Copy-Item -Path $newVideoSource -Destination $oldVideoPath.FullName -Force
            Write-Host "  - New video file copied as replacement"
        }
    } else {
        Write-Host "ERROR: New video file $newVideoSource not found"
    }
}

# 4. Search for all possible case-insensitive variants of the old video file name
Write-Host "\nSearching for all possible case-insensitive variants of the old video file name..."
$allVideoFiles = Get-ChildItem -Path $PSScriptRoot -Recurse -Include "*.mp4" -ErrorAction SilentlyContinue
$matchingVariants = $allVideoFiles | Where-Object { $_.Name -match "emaar.*south.*construction.*update.*jan.*2025" -and $_.Name -notmatch $newVideoName }

if ($matchingVariants.Count -gt 0) {
    Write-Host "Found the following possible variants of the old video file name:"
    $matchingVariants | ForEach-Object {
        Write-Host "- $($_.FullName)"
        
        # Offer to delete and replace these variants as well
        Write-Host "  Would you like to replace this file with $newVideoName? (Y/N)"
        # Note: In automated script, we'll just show the information
        # In an interactive session, you could uncomment the next lines:
        # $response = Read-Host -Prompt "Replace? (Y/N)"
        # if ($response -eq "Y" -or $response -eq "y") {
        #     Remove-Item -Path $_.FullName -Force
        #     Copy-Item -Path $newVideoSource -Destination $_.FullName -Force
        #     Write-Host "  - Replaced with new video file"
        # }
    }
} else {
    Write-Host "No other variants of the old video file name found."
}

Write-Host "\nVideo file replacement process completed!"