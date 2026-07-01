-- Run this with ServerScriptService.LoadStringEnabled
local Modules = {
    Button = loadstring(game:GetService("HttpService"):GetAsync("https://raw.githubusercontent.com/fete3712-vmX/Something/refs/heads/main/riot/roblox/guilib/Button.lua")),
    Frame = loadstring(game:GetService("HttpService"):GetAsync("https://raw.githubusercontent.com/fete3712-vmX/Something/refs/heads/main/riot/roblox/guilib/Window.lua")),
    ImageButton = loadstring(game:GetService("HttpService"):GetAsync("https://raw.githubusercontent.com/fete3712-vmX/Something/refs/heads/main/riot/roblox/guilib/ImageButton.lua"))
}
return {
    CreateWindow = function(size: UDim2, position: UDim2, color: Color3, playerGui: Instance) Modules.Frame.CreateFrame(size,position,color,playerGui) end,
    CreateButton = function(text: string, callback: function, frame: Instance, size: UDim2) Modules.Button.createButton(text,callback,frame,size) end
    CreateImageButton = function(image: number, callback: function, parent: Instance) Modules.ImageButton.createImageButton(image,callback,parent) end
}