package service

import (
	"bootcamp/client"
	"fmt"
)

type IQuotesService interface {
	Quotes() error
}

type QuotesService struct {
	Client client.IClient
}

func (s *QuotesService) Quotes() error {
	quotes, err := s.Client.GetQuotes()

	if err != nil {
		return err
	}

	m := map[string][]string{}

	for _, quote := range quotes {
		// if the author is firstly seen
		if _, ok := m[quote.Author]; !ok {
			m[quote.Author] = []string{quote.Text}
		} else {
			m[quote.Author] = append(m[quote.Author], quote.Text)
		}
	}

	fmt.Println(m)

	return err
}

func NewService(client client.IClient) IQuotesService {
	return &QuotesService{Client: client}
}
