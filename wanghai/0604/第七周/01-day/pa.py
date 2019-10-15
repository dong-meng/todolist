from time
import sleep

import requests
from bs4
import BeautifulSoup


def get_directory():

    url = 'https://www.douyu.com/directory'
html = requests.get(url).text
soup = BeautifulSoup(html, 'lxml')
unit_list = soup.find_all('li', class_ = 'unit')
results = []
for unit in unit_list:
    href = 'https://www.douyu.com' + unit.find('a')['href']
images = unit.find('img')['data-original']
title = unit.find('p').text
dict1 = {
    'href': href,
    'image': images,
    'title': title
}
sleep(2)
results.append(dict1)
return results


def get_zhibo(href, directory_title, directory_image):
    headers = {
        'Host': 'www.douyu.com',
        'Referer': 'https://www.douyu.com/directory',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) '
        'AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/63.0.3239.132 Safari/537.36'
    }
html = requests.get(href, headers = headers).text
soup = BeautifulSoup(html, 'lxml')
contentbox = soup.find('ul', id = 'live-list-contentbox')
li_list = contentbox.find_all('li')
detail_list = []
for li in li_list:
    title = li.find('a')['title']
image = li.find('img')['data-original']
classify = li.find('span', class_ = 'tag').text
name = li.find('span', class_ = 'dy-name').text
num = li.find('span', class_ = 'dy-num').text
dict2 = {
    'directory_title': directory_title,
    'directory_image': directory_image,
    'detail': {
        'title': title,
        'image': image,
        'classify': classify,
        'name': name,
        'num': num
    }
}
sleep(2)
detail_list.append(dict2)
return detail_list


def save_content(detail_list, directory_title):
    filename = directory_title + '.txt'
for x in detail_list:
    with open(filename, 'a') as f:
    f.write(x)


def main():
    results = get_directory()
for result in results:
    href = result['href']
directory_image = result['image']
directory_title = result['title']
detail_list = get_zhibo(href, directory_title, directory_image)
save_content(detail_list, directory_title)


if __name__ == '__main__':
    main()