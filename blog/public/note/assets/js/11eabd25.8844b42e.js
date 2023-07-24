"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1658],{4137:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(m,s(s({ref:t},o),{},{components:a})):n.createElement(m,s({ref:t},o))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(4137));const r={id:"elasticsearch-note",slug:"/skill/database/elasticsearch",title:"elasticsearch\u7b14\u8bb0",date:new Date("2021-03-15T00:00:00.000Z"),tags:["elasticsearch","database"],keywords:["elasticsearch","database"]},s=void 0,i={unversionedId:"skill/database/elasticsearch/elasticsearch-note",id:"skill/database/elasticsearch/elasticsearch-note",title:"elasticsearch\u7b14\u8bb0",description:"Elasticsearch Clients | Elastic \u5b98\u65b9\u6587\u6863",source:"@site/docs/skill/database/elasticsearch/index.md",sourceDirName:"skill/database/elasticsearch",slug:"/skill/database/elasticsearch",permalink:"/note/skill/database/elasticsearch",draft:!1,tags:[{label:"elasticsearch",permalink:"/note/tags/elasticsearch"},{label:"database",permalink:"/note/tags/database"}],version:"current",frontMatter:{id:"elasticsearch-note",slug:"/skill/database/elasticsearch",title:"elasticsearch\u7b14\u8bb0",date:"2021-03-15T00:00:00.000Z",tags:["elasticsearch","database"],keywords:["elasticsearch","database"]},sidebar:"skill",previous:{title:"Redis\u7b14\u8bb0",permalink:"/note/skill/database/redis"},next:{title:"elasticsearch\u7b14\u8bb0",permalink:"/note/skill/database/elasticsearch"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"window",id:"window",level:3},{value:"linux",id:"linux",level:3},{value:"docker",id:"docker",level:3},{value:"elasticsearch",id:"elasticsearch",level:4},{value:"kibana",id:"kibana",level:4},{value:"ik \u5206\u8bcd\u5668",id:"ik-\u5206\u8bcd\u5668",level:4},{value:"\u8bbe\u7f6e\u5bc6\u7801",id:"\u8bbe\u7f6e\u5bc6\u7801",level:4},{value:"docker-compose",id:"docker-compose",level:2},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:2},{value:"elasticdump",id:"elasticdump",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:4},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:5},{value:"docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:4},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u67e5\u8be2\u5e76\u5220\u9664\u5339\u914d\u6587\u6863",id:"\u67e5\u8be2\u5e76\u5220\u9664\u5339\u914d\u6587\u6863",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"elasticsearch \u9ed8\u8ba4\u8f93\u51fa\u4e00\u4e07\u6761",id:"elasticsearch-\u9ed8\u8ba4\u8f93\u51fa\u4e00\u4e07\u6761",level:3},{value:"elasticsearch \u9ed8\u8ba4\u5206\u914d\u5185\u5bb9\u4e3a 1g",id:"elasticsearch-\u9ed8\u8ba4\u5206\u914d\u5185\u5bb9\u4e3a-1g",level:3},{value:"kibana \u8bbe\u7f6e\u5bfc\u51fa csv \u5927\u5c0f",id:"kibana-\u8bbe\u7f6e\u5bfc\u51fa-csv-\u5927\u5c0f",level:3},{value:"Kibana server is not ready yet",id:"kibana-server-is-not-ready-yet",level:3},{value:"\u51fa\u95ee\u9898\u4e0d\u77e5\u9053\u600e\u4e48\u89e3\u51b3\uff0c\u67e5\u770b\u65e5\u5fd7\u8f93\u51fa\u624d\u662f\u5173\u952e",id:"\u51fa\u95ee\u9898\u4e0d\u77e5\u9053\u600e\u4e48\u89e3\u51b3\u67e5\u770b\u65e5\u5fd7\u8f93\u51fa\u624d\u662f\u5173\u952e",level:4}],o={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/index.html"},"Elasticsearch Clients | Elastic \u5b98\u65b9\u6587\u6863")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740:",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/start"},"Elasticsearch, Kibana, and the Elastic Stack | Elastic")),(0,l.kt)("h3",{id:"window"},"window"),(0,l.kt)("p",null,"\u89e3\u538b\uff0c\u53cc\u51fb bin \u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"elasticsearch.bat")," \u5373\u53ef\u542f\u52a8\uff0ckibana \u4e5f\u662f\u540c\u7406\u3002"),(0,l.kt)("p",null,"\u542f\u52a8\u540e\u8f93\u5165 http://localhost:9200 \u4e0e http://localhost:5601/ \u663e\u793a\u6b63\u5e38\u8bf4\u660e\u4e24\u8005\u90fd\u5b89\u88c5\u6210\u529f"),(0,l.kt)("h3",{id:"linux"},"linux"),(0,l.kt)("p",null,"\u540c windows \u4e0d\u8fc7\u591a\u53d9\u8ff0\u4e86"),(0,l.kt)("h3",{id:"docker"},"docker"),(0,l.kt)("p",null,"\u5f53\u7136\u4e0a\u9762\u90a3\u4e9b\u5b89\u88c5\u90fd\u8fc7\u4e8e\u9ebb\u70e6\uff0cdocker \u4e00\u6b65\u5230\u4f4d"),(0,l.kt)("h4",{id:"elasticsearch"},"elasticsearch"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/elasticsearch"},"elasticsearch (docker.com)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc\u4e0ekibana\u901a\u4fe1\ndocker network create esnet\n\n# \u6302\u8f7d\u76ee\u5f55 \u7aef\u53e3\u6620\u5c04\ndocker run -d --name elasticsearch --net esnet -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v /data/elasticsearch:/usr/share/elasticsearch/data -v /data/elasticsearch/plugins:/usr/share/elasticsearch/plugins elasticsearch:tag\n\n')),(0,l.kt)("p",null,"\u53c2\u6570\u8be6\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'docker run \u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668\n-d \u540e\u53f0\u8fd0\u884c\n--name elasticsearch \u6307\u5b9a\u5bb9\u5668\u552f\u4e00\u7684\u540d\u79f0\uff0c\u65b9\u4fbf\u7ba1\u7406\n-p 9200:9200 -p 9300:9300 \u6620\u5c04\u5bb9\u5668\u7aef\u53e3\u5230\u5bbf\u4e3b\u673a\u4e0a\n-e "discovery.type=single-node" \u73af\u5883\u53d8\u91cf\u914d\u7f6e\u5355\u673a\u6a21\u5f0f\n-v /data/elasticsearch:/usr/share/elasticsearch/data \u6301\u4e45\u5316\u6570\u636e\u5b58\u50a8\n-v /data/elasticsearch/plugins:/usr/share/elasticsearch/plugins\nelasticsearch:tag \u955c\u50cf\u540d\u79f0\u53ca\u7248\u672c tag\u6700\u65b0\n')),(0,l.kt)("h4",{id:"kibana"},"kibana"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d --name kibana --net esnet -p 5601:5601 kibana:tag\n")),(0,l.kt)("h4",{id:"ik-\u5206\u8bcd\u5668"},"ik \u5206\u8bcd\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd /usr/share/elasticsearch/plugins/\nelasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.2.0/elasticsearch-analysis-ik-7.2.0.zip\nexit\ndocker restart elasticsearch\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it \u5bb9\u5668id /bin/bash\ncd /usr/share/elasticsearch/plugins/\nmkdir ik\ncd ik\nwget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip\nyum install unzip\nunzip elasticsearch-analysis-ik-7.6.2.zip\nexit\ndocker restart elasticsearch\n")),(0,l.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u5728 kibana \u754c\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"dev tools"),"\u4e2d\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'POST test/_analyze\n{\n  "analyzer": "ik_max_word",\n  "text": "\u4f60\u597d\u6211\u662f\u6127\u600d"\n}\n')),(0,l.kt)("h4",{id:"\u8bbe\u7f6e\u5bc6\u7801"},"\u8bbe\u7f6e\u5bc6\u7801"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_43188744/article/details/108096394"},"ElasticSearch \u8bbe\u7f6e\u8d26\u6237\u5bc6\u7801")),(0,l.kt)("p",null,"\u8fdb\u5165 es \u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker exec -it elasticsearch bash\n\ncd config\nvi elasticsearch.yml\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'http.cors.enabled: true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-headers: Authorization\nxpack.security.enabled: true\n')),(0,l.kt)("p",null,"\u91cd\u542f\u540e,\u91cd\u65b0\u8fdb\u5165\u5bb9\u5668,\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"elasticsearch-setup-passwords interactive\n")),(0,l.kt)("p",null,"\u6309 y \u786e\u8ba4\u540e\u5373\u53ef\u8bbe\u7f6e\u5bc6\u7801"),(0,l.kt)("p",null,"\u8fdb\u5165 kibana \u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker exec -it kibana bash\n\ncd config\nvi kibana.yml\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'elasticsearch.username: "kibana"\nelasticsearch.password: "a123456"\n')),(0,l.kt)("p",null,"\u987a\u4fbf\u5728\u52a0\u8fd9\u51e0\u884c\u4ee3\u7801\uff0c\u540e\u7eed\u5982\u679c\u5bfc\u51fa\u6570\u636e\u8fc7\u5927\u7684\u8bdd\u4e5f\u5bfc\u7684\u51fa\u6765"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xpack.reporting.csv.maxSizeBytes: 409715200\nxpack.reporting.queue.timeout: 2800000\n")),(0,l.kt)("p",null,"\u767b\u5f55 Kibana \u7684\u8d26\u6237\u5c31\u662f kibana,elasticsearch \u7684\u8d26\u6237\u4e3a elastic."),(0,l.kt)("h2",{id:"docker-compose"},"docker-compose"),(0,l.kt)("p",null,"\u521b\u5efa volume \u6302\u8f7d\u76ee\u5f55\uff0c\u5e76\u4fee\u6539\u76ee\u5f55\u7528\u6237\u548c\u7528\u6237\u7ec4\u3002\u7531\u4e8e elasticsearch6 \u4e4b\u540e\u4e0d\u5141\u8bb8\u4f7f\u7528 root \u542f\u7528\uff0c\u6240\u4ee5\u9700\u8981\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/usr/share/elasticsearch/data\u7684\u6743\u9650\u4e3a1000\nmkdir -pv /usr/share/elasticsearch/data\nchown 1000:1000 /usr/share/elasticsearch/data\n")),(0,l.kt)("p",null,"\u90e8\u7f72\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir /usr/local/elasticsearch-kibana\ncd elasticsearch-kibana/\nvim docker-compose.yml\n")),(0,l.kt)("p",null,"docker-compose.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\nservices:\n  elasticsearch:\n    image: elasticsearch:7.2.0\n    container_name: elasticsearch\n    volumes:\n      - /usr/share/elasticsearch/data:/usr/share/elasticsearch/data\n      - ./elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n    ports:\n      - 9200:9200\n      - 9300:9300\n    networks:\n      - esnet\n    restart: always\n  kibana:\n    image: kibana:7.2.0\n    container_name: kibana\n    ports:\n      - 5601:5601\n    networks:\n      - esnet\n    depends_on:\n      - elasticsearch\n    restart: always\n\nnetworks:\n  esnet:\n")),(0,l.kt)("p",null,"vim elasticsearch.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#\u96c6\u7fa4\u540d\ncluster.name: "elasticsearch"\n# \u5141\u8bb8\u5916\u90e8\u7f51\u7edc\u8bbf\u95ee\nnetwork.host: 0.0.0.0\n#\u652f\u6301\u8de8\u57df\nhttp.cors.enabled: true\n#\u652f\u6301\u6240\u6709\u57df\u540d\nhttp.cors.allow-origin: "*"\n# \u5f00\u542fxpack\u5b89\u5168\u6821\u9a8c\uff0c\u5728kibana\u4e2d\u4f7f\u7528\u9700\u8981\u8f93\u5165\u8d26\u53f7\u5bc6\u7801\nxpack.security.enabled: true\nxpack.security.transport.ssl.enabled: true\n\n')),(0,l.kt)("p",null,"\u542f\u52a8 docker-compose ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,l.kt)("p",null,"\u81f3\u6b64\u6709\u5173 elasticSearch \u5b89\u88c5\u4e0e\u914d\u7f6e\u5c31\u544a\u4e00\u6bb5\u843d"),(0,l.kt)("h2",{id:"\u6570\u636e\u8fc1\u79fb"},"\u6570\u636e\u8fc1\u79fb"),(0,l.kt)("h3",{id:"elasticdump"},"elasticdump"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/elasticsearch-dump/elasticsearch-dump"},"elasticsearch-dump/elasticsearch-dump")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528 elasticdump (\u56e0\u4e3a\u53ea\u4f1a\u8fd9\u4e2a)"),(0,l.kt)("h4",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install elasticdump -g\nelasticdump\n")),(0,l.kt)("h4",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"elasticdump --input SOURCE --output DESTINATION [OPTIONS]\n")),(0,l.kt)("h5",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limit"),(0,l.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u64cd\u4f5c\u8981\u6279\u91cf\u79fb\u52a8\u591a\u5c11\u5bf9\u8c61,Limit \u662f\u6587\u4ef6\u6d41\u7684\u8fd1\u4f3c\u503c \u9ed8\u8ba4:100")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type"),(0,l.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u7c7b\u578b \u9ed8\u8ba4 data ","[settings, analyzer, data, mapping, policy, alias, template, component_template, index_template]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5176\u4ed6\u53c2\u6570\u770b\u6587\u6863,\u6682\u65f6\u90fd\u7528\u4e0d\u4e0a"))),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5c06es\u6570\u636e\u5bfc\u5165\u53e6\u4e00\u53f0es\u6570\u636e\nelasticdump --input=http://production.es.com:9200/my_index --output=http://staging.es.com:9200/my_index --all=true --limit=2000\n\n# \u6216\nelasticdump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=http://staging.es.com:9200/my_index \\\n  --type=analyzer\nelasticdump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=http://staging.es.com:9200/my_index \\\n  --type=mapping\nelasticdump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=http://staging.es.com:9200/my_index \\\n  --type=data\n\n# \u5907\u4efd\u6587\u4ef6\u5230\u672c\u5730\nelasticdump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=/data/my_index_mapping.json \\\n  --type=mapping\nelasticdump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=/data/my_index.json \\\n  --type=data\n\n")),(0,l.kt)("h4",{id:"docker-\u5b89\u88c5"},"docker \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker pull elasticdump/elasticsearch-dump\n")),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Copy an index from production to staging with mappings:\ndocker run --rm -ti elasticdump/elasticsearch-dump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=http://staging.es.com:9200/my_index \\\n  --type=mapping\ndocker run --rm -ti elasticdump/elasticsearch-dump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=http://staging.es.com:9200/my_index \\\n  --type=data\n\n# Backup index data to a file:\ndocker run --rm -ti -v /data:/tmp elasticdump/elasticsearch-dump \\\n  --input=http://production.es.com:9200/my_index \\\n  --output=/tmp/my_index_mapping.json \\\n  --type=data\n")),(0,l.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u5e76\u5220\u9664\u5339\u914d\u6587\u6863"},"\u67e5\u8be2\u5e76\u5220\u9664\u5339\u914d\u6587\u6863"),(0,l.kt)("p",null,"\u6b63\u5e38\u67e5\u8be2\u5bf9\u5e94\u7684\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'GET answer/_search\n{\n  "query": {\n    "match_phrase": {\n      "topic": "\u6d4b\u8bd5"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u8981\u5220\u9664 topic \u4e3a\u201c\u6d4b\u8bd5\u201d\uff0c\u53ea\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"_search"),"\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"_delete_by_query"),"\u5373\u53ef\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u6682\u65f6\u53ea\u7528\u5230\u8fd9\u4e9b TODO\u3002\u3002\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("h3",{id:"elasticsearch-\u9ed8\u8ba4\u8f93\u51fa\u4e00\u4e07\u6761"},"elasticsearch \u9ed8\u8ba4\u8f93\u51fa\u4e00\u4e07\u6761"),(0,l.kt)("p",null,"elasticsearch \u9ed8\u8ba4\u8f93\u51fa\u6700\u591a\u4e00\u4e07\u6761\uff0c\u67e5\u8be2\u7b2c 10001 \u6761\u6570\u636e\u5c31\u4f1a\u62a5\u9519"),(0,l.kt)("p",null,"\u89e3\u51b3\u65b9\u6848:"),(0,l.kt)("p",null,"1\u3001\u4fee\u6539 elasticsearch \u8f93\u51fa\u9ed8\u8ba4\u9650\u5236\u6761\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'PUT \u7d22\u5f15\u540d\u79f0/_settings?preserve_existing=true\n{\n  "max_result_window": "1000000"\n}\n')),(0,l.kt)("p",null,"2\u3001\u521b\u5efa\u7d22\u5f15\u65f6\u8bbe\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"settings":{\n    "index":{\n        "max_result_window":1000000\n \u3000\u3000}\n}\n')),(0,l.kt)("p",null,"3\u3001\u5728\u8bf7\u6c42\u7684\u65f6\u5019\u9644\u52a0\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},'"track_total_hits":true')),(0,l.kt)("h3",{id:"elasticsearch-\u9ed8\u8ba4\u5206\u914d\u5185\u5bb9\u4e3a-1g"},"elasticsearch \u9ed8\u8ba4\u5206\u914d\u5185\u5bb9\u4e3a 1g"),(0,l.kt)("p",null,"elasticsearch \u9ed8\u8ba4\u5206\u914d\u5185\u5bb9\u4e3a 1g\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"jvm.options"),"\u914d\u7f6e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"################################################################\n## IMPORTANT: JVM heap size\n################################################################\n##\n## The heap size is automatically configured by Elasticsearch\n## based on the available memory in your system and the roles\n## each node is configured to fulfill. If specifying heap is\n## required, it should be done through a file in jvm.options.d,\n## and the min and max should be set to the same value. For\n## example, to set the heap to 4 GB, create a new file in the\n## jvm.options.d directory containing these lines:\n##\n## -Xms4g\n## -Xmx4g\n##\n## See https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html\n## for more information\n##\n################################################################\n\n-Xms1g\n-Xmx1g\n")),(0,l.kt)("p",null,"\u5c06\u5176\u66f4\u6539\u4e3a\u670d\u52a1\u5668\u53ef\u5206\u914d\u7684\u7684\u5185\u5b58\uff0c\u6bd4\u5982 32g\uff0c\u5c31\u5206\u914d\u4e2a 16g \u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-Xms16g\n-Xmx16g\n")),(0,l.kt)("p",null,"\u91cd\u542f elasticsearch \u751f\u6548\u3002"),(0,l.kt)("h3",{id:"kibana-\u8bbe\u7f6e\u5bfc\u51fa-csv-\u5927\u5c0f"},"kibana \u8bbe\u7f6e\u5bfc\u51fa csv \u5927\u5c0f"),(0,l.kt)("p",null,"kibana \u9ed8\u8ba4\u5bfc\u51fa\u7684 csv \u6709\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u9ed8\u8ba4\u662f 10M\uff0c\u6570\u636e\u91cf\u5927\u4e8e 10M\uff0c\u90a3\u4e48 csv \u53ea\u4f1a\u4e0b\u8f7d 10M \u5927\u5c0f\u7684\u6570\u636e"),(0,l.kt)("p",null,"\u5e76\u4e14\u5bfc\u51fa CSV \u62a5\u544a Kibana \u662f\u653e\u5165\u961f\u5217\u4e2d\u6267\u884c\u7684\uff0c\u6709\u4e00\u4e2a\u5904\u7406\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u662f 12000 \u6beb\u79d2\uff0c\u4e5f\u5c31\u662f 2 \u5206\u949f"),(0,l.kt)("p",null,"\u89e3\u51b3\u65b9\u6848: \u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u53ef\u4ee5\u66f4\u6539\u9650\u5236\u5927\u5c0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vim kibana.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# csv\u6587\u4ef6\u5927\u5c0f200MB,\u9ed8\u8ba4\u4e3a10485760\uff0810MB\uff09\nxpack.reporting.csv.maxSizeBytes: 209715200\n# \u8d85\u65f6\u65f6\u95f4-30\u5206\u949f,\u9ed8\u8ba4\u662f120000(2\u5206\u949f)\nxpack.reporting.queue.timeout: 1800000\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539\u540e\uff0c\u91cd\u542f kibana \u5373\u53ef\u751f\u6548")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_25646191/article/details/108641758"},"Kibana 7.X \u5bfc\u51fa CSV \u62a5\u544a"))),(0,l.kt)("h3",{id:"kibana-server-is-not-ready-yet"},"Kibana server is not ready yet"),(0,l.kt)("p",null,"\u8bbf\u95ee Elasticsearch \u7684 9200 \u7aef\u53e3\uff0c\u80fd\u6b63\u5e38\u8bbf\u95ee\uff0c\u4f46\u8bbf\u95ee Kibana \u7684 5601 \u7aef\u53e3\u5c31\u63d0\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Kibana server is not ready yet\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5")),(0,l.kt)("p",null,"\u5c06\u914d\u7f6e\u6587\u4ef6 kibana.yml \u4e2d\u7684 elasticsearch.url \u6539\u4e3a\u6b63\u786e\u7684\u94fe\u63a5\uff0c\u9ed8\u8ba4\u4e3a: http://elasticsearch:9200\uff0c\u6539\u4e3a http://\u81ea\u5df1\u7684 IP \u5730\u5740:9200"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Default Kibana configuration for docker target\nserver.name: kibana\nserver.host: "0"\nelasticsearch.hosts: [ "http://elasticsearch:9200" ]\nxpack.monitoring.ui.container.elasticsearch.enabled: true\n')),(0,l.kt)("p",null,"\u7136\u540e\u91cd\u542f kibana \u5373\u53ef\uff0c\u8bb0\u5f97\u9632\u706b\u5899\u5f00\u653e 5601 \u7aef\u53e3"),(0,l.kt)("h4",{id:"\u51fa\u95ee\u9898\u4e0d\u77e5\u9053\u600e\u4e48\u89e3\u51b3\u67e5\u770b\u65e5\u5fd7\u8f93\u51fa\u624d\u662f\u5173\u952e"},"\u51fa\u95ee\u9898\u4e0d\u77e5\u9053\u600e\u4e48\u89e3\u51b3\uff0c\u67e5\u770b\u65e5\u5fd7\u8f93\u51fa\u624d\u662f\u5173\u952e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker logs \u5bb9\u5668id(\u5bb9\u5668\u540d)\n")))}u.isMDXComponent=!0}}]);