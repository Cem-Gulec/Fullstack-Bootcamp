package handler

import (
	"bootcamp/service"
	"net/http"
)

type IHandler interface {
	Greet(w http.ResponseWriter, r *http.Request)
}

type Handler struct {
	// instead of defining service as a variable, this way we will
	// be able to replace any new service easily by using its functions
	// Also called: dependency injection
	service service.IRestaurant
}

// Controller/handler basically has 2 responsibility:
// Firstly, the validation stage where you decide on
// which type of request you want to work with
// Secondly, the formatting stage where you obtained processed data
// and you are ready to return it on any type (XML, JSON etc.)
func (c *Handler) Greet(w http.ResponseWriter, r *http.Request) {

	// validation stage
	if r.Method != "GET" {
		return
	}

	result := c.service.Greet(r.URL.Path)

	// formatting stage
	w.Write([]byte(result))
}

func NewHandler(service service.IRestaurant) IHandler {
	return &Handler{service: service}
}
