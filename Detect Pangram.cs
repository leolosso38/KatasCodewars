using System;
using System.Linq;

public static class Kata
{
  public static bool IsPangram(string text)
  {
    
    
  string alfabeto= "abcdefghijklmnopqrstuvwxyz";
   string lowerInput = text.ToLower();
    return alfabeto.All(lowerInput.Contains);
  }
   public static void Main()
     {
      string palabra1="The quick brown fox jumps over the lazy dog.";
      string palabra2="pangram";
       
       Console.WriteLine(IsPangram(palabra1));
       Console.WriteLine(IsPangram(palabra2));
   }
}
