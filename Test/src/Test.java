import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

public class Test {
    public static void main(String args[]) {

        try {
            BufferedReader in = new BufferedReader(new FileReader("d:/1.txt"));

            String str = "";
            String line = null;
            while ((line = in.readLine()) != null) {
                str += line;
   // str += line + ",";
            }

            System.out.println(str);
            in.close();

            char intxt[] = new char[str.length()];

            str.getChars(0, str.length(), intxt, 0); // 입력하고자 하는 문자열을 문자배열

            FileWriter fw = new FileWriter("d:/2.txt");
            BufferedWriter bw = new BufferedWriter(fw); // 버퍼를 사용한 객체 bw 생성

            bw.write(intxt); // 문자 배열의 내용을 파일에 출력
            bw.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
