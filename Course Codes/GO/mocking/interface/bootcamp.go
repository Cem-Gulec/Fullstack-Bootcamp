package iface

import "fmt"

type MyIntegerInterface interface {
	MyInteger(int) int
}

type MyInteger struct {
}

func (*MyInteger) MyInteger(i int) int {
	fmt.Println("MyInteger runs")
	return i
}

func MyString(i int, iface MyIntegerInterface) string {
	if myInteger := iface.MyInteger(i); myInteger == 0 {
		return "zero"
	} else if myInteger == 1 {
		return "one"
	} else {
		return "number"
	}
}
