package main

import (
	"fmt"
	"os"
	"strings"
)

func main(){

	var str string = strings.Join(os.Args[1:], " ")
	var revStr string = ""

	for i := len(str) - 1; i >= 0; i-- {
		revStr += string(str[i])
	}

	fmt.Println(revStr)

}
