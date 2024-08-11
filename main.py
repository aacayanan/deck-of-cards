import tkinter as tk
from tkinter import *

# Supported currencies
currencies = [
    "USD", "EUR", "JPY", "GBP", "CNY", "AUD", "CAD", "HKD", "KRW", "MXN", "PHP"
]

USD_RATES = {
    "AUD": 1.5214101696,
    "CAD": 1.3726501635,
    "CNY": 7.1641913347,
    "EUR": 0.9155001484,
    "GBP": 0.783740108,
    "HKD": 7.7951911208,
    "JPY": 146.6644425356,
    "KRW": 1362.4780505202,
    "MXN": 18.8239331216,
    "PHP": 57.2601459857,
    "USD": 1
}


def convert():
    # Convert to USD
    amount = float(amount_entry.get())
    local = curr_clicked.get()
    foreign = conv_clicked.get()

    if local != "USD":
        local_to_usd = 1 / USD_RATES[local]
    else:
        local_to_usd = 1
    # Local is now USD, convert to foreign currency
    new_amount = amount * local_to_usd * USD_RATES[foreign]

    # Update the result text
    result_text.set(f"{new_amount:,.2f} {foreign}")

def func(event):
    convert()


# Create a window
root = tk.Tk()
root.title("Currency Converter")
root.geometry("500x500")

# Header label
header = tk.Label(root, text="Currency Converter", font=("Arial", 24))
header.pack(pady=20)  # Add vertical padding and center the label

# Datatype of menu text
curr_clicked = tk.StringVar()
conv_clicked = tk.StringVar()
curr_clicked.set(currencies[0])  # Set the default option for current currency
conv_clicked.set(currencies[1])  # Set the default option for conversion currency

# Currency Selection
currency_frame = Frame(root)
curr_selection = tk.Label(root, text="Convert Selected Currency", font=("Arial", 16))
curr_drop = OptionMenu(currency_frame, curr_clicked, *currencies)
to_currency = tk.Label(currency_frame, text="to", font=("Arial", 10))
conv_drop = OptionMenu(currency_frame, conv_clicked, *currencies)

curr_selection.pack(pady=10)
curr_drop.pack(side=LEFT)
to_currency.pack(side=LEFT)
conv_drop.pack(side=RIGHT)

currency_frame.pack()

# Amount Entry
empty_label = tk.Label(root, text="", font=("Arial", 16))
amount_label = tk.Label(root, text="Enter Amount", font=("Arial", 16))
amount_entry = Entry(root, justify='center', font=("Arial", 12))
amount_entry.insert(0, "0")
empty_label.pack(pady=1)
amount_label.pack(pady=10)
amount_entry.pack()

# Submit Button
result_text = StringVar()
submit_button = Button(root, text="Submit", command=convert, font=("Arial", 12))
submit_button.pack(pady=10)
root.bind("<Return>", func)

# Conversion Result
empty_label = tk.Label(root, text="", font=("Arial", 16))
empty_label.pack(pady=1)
result_frame = Frame(root)
result_label = tk.Label(result_frame, text="Conversion Result", font=("Arial", 16))
result_text.set(f"N/A {conv_clicked.get()}")
conversion_result_label = tk.Label(result_frame, textvariable=result_text, font=("Arial", 12))
result_label.pack(pady=10)
conversion_result_label.pack()

result_frame.pack()

# Footer
footer_label = tk.Label(root, text="Created by: Aaron Cayanan (exchange rates updated 8/11/2024)", font=("Arial",
                                                                                                         8))
footer_label.pack(pady=20)

# Start the event loop
root.mainloop()
