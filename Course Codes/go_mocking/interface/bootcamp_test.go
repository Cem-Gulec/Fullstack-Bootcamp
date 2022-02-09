package iface

import (
	mock_iface "bootcamp/mock"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestMyInterface(t *testing.T) {

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

	//m := &MyInteger{}

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	m := mock_iface.NewMockMyIntegerInterface(ctrl)

	for _, c := range cases {
		t.Run(c.result, func(t *testing.T) {
			m.EXPECT().MyInteger(c.integer).Return(c.integer).Times(1)

			result := MyString(c.integer, m)

			assert.Equal(t, c.result, result)
		})
	}
}
