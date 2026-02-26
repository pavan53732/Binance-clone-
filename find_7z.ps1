$paths = "C:\Program Files\7-Zip", "C:\Program Files (x86)\7-Zip", "$env:LOCALAPPDATA\Microsoft\WinGet\Packages"
foreach ($p in $paths) {
    if (Test-Path $p) {
        $files = Get-ChildItem -Path $p -Filter 7z.exe -Recurse -ErrorAction SilentlyContinue
        if ($files) {
            Write-Output $files.FullName
        }
    }
}
