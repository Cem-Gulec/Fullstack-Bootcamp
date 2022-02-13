package main

import (
	"bootcamp/handler"
	"bootcamp/service"
	"fmt"
	"net/http"
)

func main() {

	service := service.NewService()
	handler := handler.NewHandler(service)

	http.HandleFunc("/", handler.Quotes)
	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		fmt.Println(err)
	}
}
