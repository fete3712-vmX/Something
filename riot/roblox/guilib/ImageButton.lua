return {
    createImageButton = function(image: number, callback: function, parent: Instance)
        local imageButton = Instance.new("ImageButton",parent)
        imageButton.Image = image
        imageButton.MouseButton1Click:Connect(callback)
    end
}