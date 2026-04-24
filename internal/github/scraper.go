package github

import (
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
)

var baseURL = "https://github.com/luca-naujoks?tab=repositories"

var projects []IProject
var lastFetch time.Time

type IProject struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
	GitLink     string `json:"git_link"`
	Archived    bool   `json:"archived"`
}

func GetProjects() ([]IProject, error) {
	if len(projects) == 0 || lastFetch.AddDate(0, 0, 1).Before(time.Now()) {
		fmt.Println("fetching projects from GitHub")
		fetchedProjects, err := parseProjects()
		if err != nil {
			return nil, err
		}
		projects = fetchedProjects
		lastFetch = time.Now()
	}
	fmt.Println("serving cached Projects")
	return projects, nil
}

func parseProjects() ([]IProject, error) {
	var projects []IProject

	client := &http.Client{}
	req, _ := http.NewRequest("GET", baseURL, nil)
	resp, _ := client.Do(req)
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			return
		}
	}(resp.Body)

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return projects, err
	}

	doc.Find("ul[data-filterable-for='your-repos-filter'] li").
		Each(func(i int, s *goquery.Selection) {
			classes, _ := s.Attr("class")

			project := IProject{
				Name:        strings.TrimSpace(s.Find("h3 a").Text()),
				Description: strings.TrimSpace(s.Find("p[itemprop='description']").Text()),
				Archived:    strings.Contains(classes, "archived"),
			}

			if href, ok := s.Find("h3 a").Attr("href"); ok {
				project.GitLink = "https://github.com" + href
			}

			projects = append(projects, project)
		})
	return projects, nil
}
