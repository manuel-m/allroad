###Configuration


**`TheConfig.json`** describes the configuration and the document structure

```
{
    "mainTitle": "Allroad documentation",
    "brand": "Efficiel technologie",
    "localStorageKey": "allroad_doc",
    "basicProtect": {
        "key": "","activated": false
    },
    "baseDir": "assets/md",
    "chapters": [{
        "heading": "Introduction","dir": "00",
        "sections": [{
            "heading": "Introduction",
            "doc": "000_allroad"
        }, {
            "heading": "Extra features",
            "doc": "001_features"
        }]
    }, {
        "heading": "Using allroad","dir": "01",
        "sections": [{
            "heading": "TheContent.json",
            "doc": "010_config"
        }]
    }]
}
```