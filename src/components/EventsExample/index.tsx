import React, {FC, useRef, useState} from 'react';

const Index: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag")
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false)
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false)
    console.log("DROP")
  }
  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder={"Controlled"}/>
      <input ref={inputRef} type="text" placeholder={"Uncontrolled"}/>
      <button onClick={clickHandler}>Show value</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "lightcoral"}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={
          {
            width: 200,
            height: 200,
            background: isDrag ? "lightcoral" : "lightpink",
            marginTop: 15
          }
        }
      ></div>
    </div>
  );
};

export default Index;