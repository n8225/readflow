package api

import (
	"fmt"
	"net/http"

	"github.com/ncarlier/readflow/pkg/config"
)

func runtimeConfig(conf *config.Config) http.Handler {
	var authority, apiBaseURL string
	if conf.AuthN == "proxy" {
		authority = "mock"
	} else {
		authority = conf.AuthN
	}
	if conf.ApiBaseURL == "" {
		apiBaseURL = conf.PublicURL
	} else {
		apiBaseURL = conf.ApiBaseURL
	}
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "window['runConfig']={authority:'%s',clientID:'%s',redirectURL:'%s',apiBaseURL:'%s'}", authority, conf.ClientID, conf.RedirectURL, apiBaseURL)
		w.Header().Set("Content-Type", "application/javascript")
	})
}
