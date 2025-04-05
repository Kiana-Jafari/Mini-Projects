/*
This is an easy version of the `Double It and Give It to The Next Person` program written in C.
It takes a character from the user (i.e. Y/y or N/n) and asks the user if they want to take the current dollar
or double it and give it to the next person.

The purpose of writing this program was to:

1. Simulate a real-world, yet fun and engaging scenario using code
2. Show the integer overflow after some iterations

``````````````````````````````````````````````````````````````````````````````````````
Numeric Overflow happens when the result of a calculation exceeds
the largest value that can be represented by the data type,
causing it to be assigned an infinite value. (similar to exponentiation in this case)

``````````````````````````````````````````````````````````````````````````````````````
*/

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int dollars = 1;

    while (true)
    {
        char c = get_char("Here's $%i. Double it and give it to the next person?", dollars);

        if (c == 'y' || c == 'Y')
        {
            dollars *= 2;

            if (dollars == 2097152)
            {
                printf("Sorry, you've reached the maximum limit! The money is donated to the charity and resets to $1.\n");
                dollars = 1;
            }
        }

        else if (c == 'n' || c == 'N')
        {
            break;
        }
    }

    printf("Here's your $%i!\n", dollars);
}