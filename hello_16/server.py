import requests
import json
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin
from contextlib import closing

app = Flask(__name__)
CORS(app)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
}

@app.route('/zhihu/news/latest')
def get_zhihu_latest_news():
    url = "http://news-at.zhihu.com/api/4/news/latest"
    r = requests.get(url, headers=headers)

    return jsonify(r.json())

@app.route('/zhihu/news/<id>')
def get_zhihu_news(id):
    url = "http://news-at.zhihu.com/api/4/news/" + id
    r = requests.get(url, headers=headers)

    return jsonify(r.json())
