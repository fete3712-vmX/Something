return {
    createFrame = function(size: UDim2, position: UDim2, color: Color3)
        local gui = Instance.new("ScreenGui", game:GetService("Players").LocalPlayer.PlayerGui)
        gui.Name = "GUILib_" ..math.random(1,9999)
        
        local frame = Instance.new("Frame",gui)
        frame.Size = size
        frame.Position = position
        frame.BackgroundColor3 = color
        Instance.new("UICorner",frame)
        
    end
}