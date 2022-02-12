package service

type IRestaurant interface {
	Greet(string) string
}

type Restaurant struct {
	Table []int
}

func (*Restaurant) Greet(s string) string {
	return "hello, " + s
}

func NewService() IRestaurant {
	return &Restaurant{}
}
