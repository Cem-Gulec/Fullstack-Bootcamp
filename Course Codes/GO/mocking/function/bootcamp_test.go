package function

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMyString(t *testing.T) {

	cases := []struct {
		integer int
		result  string
	}{
		{0, "zero"},
		{1, "one"},
		{2, "number"},
		{-42, "number"},
		{8747823784, "number"},
	}

	for _, c := range cases {
		t.Run(c.result, func(t *testing.T) {
			result := MyString(c.integer)

			assert.Equal(t, c.result, result)
		})
	}
}
