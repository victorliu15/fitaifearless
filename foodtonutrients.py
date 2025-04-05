import csv
from unidecode import unidecode
csv.field_size_limit(2147483647)

needed = """
product_name
generic_name
ingredients_text
allergens
allergens_en
energy_100g
fat_100g
saturated-fat_100g
monounsaturated-fat_100g
polyunsaturated-fat_100g
omega-3-fat_100g
omega-6-fat_100g
omega-9-fat_100g
trans-fat_100g
cholesterol_100g
carbohydrates_100g
sugars_100g
fiber_100g
proteins_100g
sodium_100g
vitamin-a_100g
beta-carotene_100g
vitamin-d_100g
vitamin-e_100g
vitamin-k_100g
vitamin-c_100g
vitamin-b1_100g
vitamin-b2_100g
vitamin-pp_100g
vitamin-b6_100g
vitamin-b9_100g
folates_100g
vitamin-b12_100g
biotin_100g
potassium_100g
chloride_100g
calcium_100g
phosphorus_100g
iron_100g
magnesium_100g
zinc_100g
copper_100g
manganese_100g
fluoride_100g
selenium_100g
chromium_100g
molybdenum_100g
iodine_100g
caffeine_100g"""

def tsv_to_dict():
    foods = {}
    with open('C:\\Users\\marks\\fitaifearless\\food_output.tsv', 'r', encoding="utf8") as file:
        reader = csv.reader(file, delimiter='\t')
        headers = next(reader)
        foods = {header: [] for header in headers if header in needed}
        for row in reader:
            for key, value in zip(headers, row):
                if key in foods.keys():
                    foods[key].append(value)
    return foods

def export_dict():
    foods = {}
    with open('C:\\Users\\marks\\Downloads\\en.openfoodfacts.org.products.tsv', 'r', encoding="utf8") as file:
        reader = csv.reader(file, delimiter='\t')
        headers = next(reader)
        foods = {header: [] for header in headers if header in needed}
        #c=0
        for row in reader:
            row = [unidecode(r.lower()) for r in row]
            str_row = " ".join(row)
            if not ("united states" in str_row or "canada" in str_row or "united kingdom" in str_row):
                continue
            
            #c += 1
            #if c < 10:
            for key, value in zip(headers, row):
                if key in foods.keys():
                    foods[key].append(value)
    return foods

def install_csv():
    foods = export_dict()
    print(len(foods["magnesium_100g"]))
    headers = list(foods.keys())
    rows = zip(*[foods[key] for key in headers])

    with open("food_output.tsv", "w", newline='', encoding="utf-8") as tsvfile:
        writer = csv.writer(tsvfile, delimiter='\t')
        writer.writerow(headers)
        writer.writerows(rows)
    print("done")

install_csv()