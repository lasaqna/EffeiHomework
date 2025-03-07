# ExpressAPISample
this is a sample that WEB API be made by express 

# database structure 
1. dish
  - dish_id
    - auto incrementで割り振られる料理固有のID
  - dish_name
    - 料理の名前
2. infomation
  - info_id
    - auto incrementで割り振られる固有のID
  - dish_id
    - どの料理の情報化を示す
  - abstract
    - 料理の概要を示す
  - country_id  
    - 料理がどの国に属するかを示すID
  - place_id
    - 料理がどの地域に属するかを示すID
  - category
    - 料理がどのカテゴリーに属するかを示すID
3. recipe
  - recipe_id
    - レシピ固有のID
  - dish_id
    - どの料理のレシピ化を示す
  - ingredients
    - JSON形式で料理に必要な材料を持つ
    - キーは0から順に割り振られる
  - processes
    - JSON形式で料理の手順を持つ
    - キーは0から順に割り振られる

 # how to use api
 1. データベースへのデータの追加方法  
    - fetch apiをつかって"http://localhost:<ポート番号>/add-data"にアクセス  
    - データの追加に必要なデータ
      - dish_name
      - image_path
      - abstract
      - country
      - place
      - category
      - dish_id
     - 必要なデータが書けている場合データベースにデータは追加されない
  2. データベースからデータを持ってくる方法  
     - fetch apiをつかって"http://localhost:<ポート番号>/get-data/<データの検索方法>
     - 手にいられるデータの形式
       - データの検索方法によるのでコードを見てほしい
     - データを検索して持ってくる場合はurlの末尾に"?<検索する変数名>=<検索条件>を追加する。もし検索条件がない場合はすべての料理のデータが返される  
     - データの検索方法  
      - add-dish  
         - すべての料理データを持ってくる  
      - dish-name-search
        - 料理名で部分一致検索を行い一致したものを返す
        - 検索する変数名は"dish_name"
      - category-search
        - カテゴリーで検索
        - 検索する変数名はcategory_id
      - dish-id-search
        - 料理に割り振られた固有のIDで検索
        - 検索する変数名はdish_id
      - place-search
        - 料理のplaceによって検索
        - 検索する変数名はplace_id
