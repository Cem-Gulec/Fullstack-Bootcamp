package function

import (
	"fmt"
)

func MyInteger(i int) int {
	fmt.Println("MyInteger runs")
	return i
}

func MyString(i int) string {
	if myInteger := MyInteger(i); myInteger == 0 {
		return "zero"
	} else if myInteger == 1 {
		return "one"
	} else {
		return "number"
	}
}
