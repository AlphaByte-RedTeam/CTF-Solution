import java.util.ArrayList;
import java.util.Scanner;

// 
// Decompiled by Procyon v0.5.36
// 

public class KodeBit
{
    public static void main(final String[] array) {
        System.out.print("Enter Password: ");
        final String next = new Scanner(System.in).next();
        if (next.length() != 16) {
            System.out.println("Wrong");
            return;
        }
        final char[] array2 = { '\u0083', '\u00c3', '\u00c2', 'C', '\u0001', '\u00e1', 'B', '\u0002', 'I', '\u00e9', '\0', '#', '!', '\t', '\u00c1', '\u00c0' };
        final ArrayList<Character> list = new ArrayList<Character>();
        for (final char c : next.toCharArray()) {
            list.add((char)(((c << 5 | c >> 3) ^ 0x6F) & 0xFF));
        }
        for (int j = 0; j < 16; ++j) {
            if (!list.get(j).equals(array2[j])) {
                System.out.println("Wrong");
                return;
            }
        }
        System.out.println("Success");
    }
}
