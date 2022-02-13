package client

type IClient interface {
	GetQuotes() (string, error)
}

type Client struct {
	url string
}

func (c *Client) GetQuotes() (string, error) {
	return "", nil
}

func NewClient(url string) IClient {
	return &Client{url: url}
}
