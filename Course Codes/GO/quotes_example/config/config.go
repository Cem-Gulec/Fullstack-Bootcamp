package config

import (
	"encoding/json"
	"io"
	"os"
)

type Config struct {
	// because we will be serializing from json formatted file
	ServiceURL string `json:"serviceURL"`
	MaxCounter int    `json:"maxCounter"`
}

var C = &Config{}

func init() {
	file, err := os.Open(".config/" + env + ".json")

	// forcing application to only use defined environment informations
	if err != nil {
		panic(err)
	}
	defer file.Close()

	read, err := io.ReadAll(file)

	if err != nil {
		panic(err)
	}

	err = json.Unmarshal(read, C)

	if err != nil {
		panic(err)
	}
}
