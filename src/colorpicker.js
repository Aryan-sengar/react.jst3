import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState('');


    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="color-picker-a">
            <style jsx>
                {`
        .purple{
            background-color: #9370DB;
        }
        .color-picker-a {
            background-color: #9370DB;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          }
          .color-picker {
            background-color: #ff99cc;
            padding:150px 10px 10px 10px ;
            
            border-radius: 5px;
            height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }

          .color-list {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .color-swatch {
            width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
          }

          .color-swatch button {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 5px;
            background-color: transparent;
            cursor: pointer;
          }

          .color-swatch button:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          .color-picker-button {
            
            background-color: #0d6efd;
            color: #fff;
            border-radius: 0.25rem;
            font-size: 1rem;
            line-height: 1.5;
            padding: 0.5rem 1rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
            user-select: none;
            margin-top: 20px;
          }

          .color-picker-button:hover {
            background-color: #1a73e8;
          }

          .color-picker-button:focus {
            color: #fff;
            background-color: #1a73e8;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
          }
        `}
            </style><div className='purple'>
                <h1>Color Picker</h1>
                <div className="color-picker">
                    <div className="color-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        {colors.map((color, index) => (
                            <div key={index} className="color-swatch">
                                <button type="button" onClick={() => handleColorSelect(color)} style={{ backgroundColor: color }} />
                            </div>
                        ))}
                    </div>
                    <button type="button" className="color-picker-button" style={{ backgroundColor: selectedColor }}>Pick a color
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
