import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean solution(String[] phone_book) {
        
        Arrays.sort(phone_book);

		Map<String, Object> map = new HashMap<String, Object>();
		for(String temp : phone_book){
			map.put(temp, 0);
		}
		for(String str : phone_book){
			for(int index = 0; index < str.length(); index++){
				String temp = str.substring(0, index);
				if( map.containsKey( temp ) ){
					return false;
				}
			}
		}
		return true;
    }
}