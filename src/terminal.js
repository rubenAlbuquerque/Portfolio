{/* 
<div
    className="flex flex-col justify-start items-start p-2 overflow-hidden "
    // style={{ overflow: "auto" }}
>
    <div
        className="input-terminal-results text-red-500 text-sm font-mono"
        style={{ whiteSpace: "pre-line" }}>
        {output}
    </div>
    <input
        ref={inputRef}
        type="text"
        className="input-terminal bg-red-800 text-red-500 w-full outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                let newOutput = "";
                if (output === "") {
                    newOutput = "In:  " + input + "\n";
                } else {
                    newOutput = output + "\nIn: " + input + "\n";
                }
                switch (input) {
                    case "help":
                        newOutput = newOutput + "help";
                        break;
                    case "clear":
                        newOutput = "";
                        break;
                    case "ls":
                        newOutput = newOutput + "ls";
                        break;
                    case "cd":
                        newOutput = newOutput + "cd";
                        break;
                    case "pwd":
                        newOutput = newOutput + "pwd";
                        break;
                    case "mkdir":
                        newOutput = newOutput + "mkdir";
                        break;
                    default:
                        newOutput =
                            newOutput +
                            "Command not found: Try help, clear, ls, cd, pwd, mkdir";
                        break;
                }

                console.log("newOutput: ", newOutput);
                setOutput(newOutput);
                setInput("");
            }
        }}
    />
</div>; */}
