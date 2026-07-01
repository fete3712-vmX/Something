return {
   createButton = function(text: string, callback: function, frame: Instance, size: UDim2) 
    if frame = nil then return end

    local button = Instance.new("TextButton", frame.Frame)
    button.Text = text
    button.Size = size
    button.BackgroundColor3 = frame.BackgroundColor3
    button.MouseButton1Click:Connect(callback)
   end
}