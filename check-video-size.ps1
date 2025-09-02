$file = Get-ItemProperty -Path videos\EMAAR_SOUTH_CONSTRUCTION_UPDATE_JAN_2025.mp4
Write-Output ('文件名: ' + $file.Name)
Write-Output ('文件大小: ' + [math]::Round($file.Length/1MB, 2) + ' MB')