import lxml.etree as ET
from lxml import html

# Step 4: XML Validation
def validate_xml(xml_file, xsd_file):
    xmlschema = ET.XMLSchema(ET.parse(xsd_file))
    xml_data = ET.parse(xml_file)
    
    if xmlschema.validate(xml_data):
        print("XML is valid.")
    else:
        print("XML is not valid. Validation errors:")
        for error in xmlschema.error_log:
            print(f"  Line {error.line}: {error.message}")

# Step 5: XML Transformation
def transform_xml(xml_file, xslt_file):
    xml_data = ET.parse(xml_file)
    xslt = ET.XSLT(ET.parse(xslt_file))
    result_tree = xslt(xml_data)
    
    # Serialize the HTML result to a string
    transformed_html = html.tostring(result_tree, pretty_print=True, encoding='unicode')
    
    return transformed_html

# Step 4: Validate the XML data against the XSD schema
validate_xml("jokes.xml", "jokes.xsd")

# Step 5: Transform the XML data using the XSLT stylesheet
transformed_html = transform_xml("jokes.xml", "jokes.xslt")

# Step 6: Display the HTML table
print(transformed_html)
