package service

import "bootcamp/client"

type IQuotesService interface {
	Quotes(string) string
}

type QuotesService struct {
	Client client.IClient
}

func (*QuotesService) Quotes(s string) string {
	return "hello, " + s
}

func NewService(client client.IClient) IQuotesService {
	return &QuotesService{Client: client}
}
