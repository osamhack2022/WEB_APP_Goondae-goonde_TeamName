#kakao local api를 이용한 주소데이터 전처리
from PyKakao import KakaoLocal



class processing:
    def __init__(self):
        # kakao rest api key
        self.rest_key = '5e10a4eff5ea251beeb6a88624029c19'
        self.local = KakaoLocal(self.rest_key)
        
        
    def return_address(self, crawled_data):
        result = []
        i = 0
        for data in crawled_data:
            raw_address = data['address']
            
            try:    
                search = self.local.search_address(raw_address)
                address = search['documents'][0]['road_address']
                data.update({'address': address['address_name']})
                data['region1'] = address['region_1depth_name']
                data['region2'] = address['region_2depth_name']
                data['region3'] = address['region_3depth_name']
                data['x'] = float(address['x'])
                data['y'] = float(address['y'])
                result.append(data)
            except:
                i += 1

                # 에러난 데이터는 제외
                print('error', i, data['address'])
        return result
