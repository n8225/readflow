package api

import (
	"fmt"
	"net/http"

	"github.com/ncarlier/readflow/pkg/config"
)

func runtimeConfig(conf *config.Config) http.Handler {
	var authority string
	if conf.AuthN == "proxy" {
		authority = "mock"
	} else {
		authority = conf.AuthN
	}
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "window['runConfig']={authority:'%s',clientID:'%s',redirectURL:'%s'}", authority, conf.ClientID, conf.RedirectURL)
		w.Header().Set("Content-Type", "application/javascript")
	})
}
