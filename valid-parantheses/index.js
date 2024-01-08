function validParentheses(parenStr) {
    while(parenStr.includes("()")){
      parenStr = parenStr.split("()").join("");
    }
    return parenStr.length === 0
    }