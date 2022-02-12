package internal_test

import (
	"bootcamp/internal"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestInteger(t *testing.T) {
	tests := []struct {
		name string
		want int
	}{
		{"first", 1},
		{"second", 2},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			//if got := internal.Integer(); got != tt.want {
			//	t.Errorf("Integer() = %v, want %v", got, tt.want)
			//}
			assert.Equal(t, internal.Integer(), tt.want, "they should be equal")
		})
	}
}

//func TTestInteger(t *testing.T) {
//	i := internal.Integer()
//
//	if i != 1 {
//		t.Errorf("got: %d, want: %d", i, 1)
//	}
//
//}

//func TestInteger(t *testing.T) {
//	testCases := []struct {
//		params int
//		want int
//	}{
//		{1, 2},
//	}
//
//	for _, v := range testCases {
//		i := internal.Integer()
//		assert.Equal(t, i, v.want)
//	}
//}
