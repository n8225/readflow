package assets

import (
	"net/http"
	"os"
	"path"

	_ "github.com/ncarlier/readflow/pkg/assets/statik" //statik files
	"github.com/rakyll/statik/fs"
	"github.com/rs/zerolog/log"
)

type spaIndex struct {
	asset http.FileSystem
}

func (i *spaIndex) Open(name string) (http.File, error) {
	ret, err := i.asset.Open(name)
	if !os.IsNotExist(err) || path.Ext(name) != "" {
		return ret, err
	}
	return i.asset.Open("/index.html")
}

func StaticAssets() http.Handler {
	statikFS, err := fs.New()
	if err != nil {
		log.Fatal().Err(err)
	}
	return http.FileServer(&spaIndex{statikFS})
}
