function iEM3255EN()
{
    return `<h4>Configuring the iEM3255 meter</h4>
Press and hold the OK and ESC buttons until the password entry fields appear.
The password is entered one digit at a time.
V - increases the current digit by one.
OK - proceeds to entering the next digit.
After entering the last digit, the meter automatically enters the setup mode.
Password 0010. Input attempts - 5 (probably, but it is better not to check).
In the setup mode, V scrolls through the sections, OK enters the current section.
CT & VT - Section for specifying the type of current transformer.
CT Secondary - specifies the lower parameter, if the transformer is 120/5, then 5 is entered here.
CT Primary - specifies the upper parameter, in this example it is 120.
..Checking.
To check the meter, press the V button without entering the settings menu, selecting the V & I or P, Q, & S item.
The VMA uses a heater with a power of 8.4 amperes at 220 volts.
When entering the V & I section, you can see the network voltage, network frequency and current strength in each phase.
Therefore, select phase 1 and connect the heater to phase 1, if it shows 8.4 amperes, then everything works.
Also check the other phases. In the example, the heater is in the VMA.`
}