from lxml import etree

# Load the XML Schema
schema = etree.XMLSchema(etree.parse('jokes.xsd'))

# Load the XML Data
xml_data = etree.parse('jokes.xml')

# Validate the XML Data
if schema.validate(xml_data):
    print("XML is valid")
else:
    print("XML is not valid")
    for error in schema.error_log:
        print(f"Error in line {error.line}: {error.message}")
