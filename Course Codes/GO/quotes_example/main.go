package main

import (
	"bootcamp/client"
	"bootcamp/config"
	"bootcamp/handler"
	"bootcamp/service"
	"fmt"
	"net/http"
)

func main() {
	client := client.NewClient(config.C.ServiceURL)
	service := service.NewService(client)
	handler := handler.NewHandler(service)

	http.HandleFunc("/", handler.Quotes)
	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		fmt.Println(err)
	}
}
