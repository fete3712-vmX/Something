return {
    createFrame = function(size: UDim2, position: UDim2, color: Color3, playerGui: Instance)
        local gui = Instance.new("ScreenGui", playerGui)
        gui.Name = "GUILib_" ..math.random(1,9999)
        
        local frame = Instance.new("Frame",gui)
        frame.Size = size
        frame.Position = position
        frame.BackgroundColor3 = color
        Instance.new("UICorner",frame)
        Instance.new("UIDragDetector",frame)
        Instance.new("UIListLayout",frame)
    end
}