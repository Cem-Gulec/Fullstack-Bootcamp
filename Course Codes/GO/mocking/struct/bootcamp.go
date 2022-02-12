package strct

import (
	"fmt"
)

type MyInteger struct {
}

func (*MyInteger) MyInteger(i int) int {
	fmt.Println("MyInteger runs")
	return i
}

func MyString(i int, v *MyInteger) string {
	if myInteger := v.MyInteger(i); myInteger == 0 {
		return "zero"
	} else if myInteger == 1 {
		return "one"
	} else {
		return "number"
	}
}
