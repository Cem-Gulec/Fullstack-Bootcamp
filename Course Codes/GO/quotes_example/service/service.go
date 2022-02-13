package service

type IQuotesService interface {
	Quotes(string) string
}

type QuotesService struct {
}

func (*QuotesService) Quotes(s string) string {
	return "hello, " + s
}

func NewService() IQuotesService {
	return &QuotesService{}
}
