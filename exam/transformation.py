from lxml import etree

# Load XML data and XSLT stylesheet
xml_file = "jokes.xml"
xslt_file = "jokes.xslt"

# Parse the XSLT stylesheet
xslt = etree.XSLT(etree.parse(xslt_file))

# Parse the XML data and apply transformation
xml_data = etree.parse(xml_file)
transformed_result = xslt(xml_data)

# Save the transformed result as an HTML file
output_html_file = "output.html"
with open(output_html_file, "wb") as output_file:
    output_file.write(etree.tostring(transformed_result, pretty_print=True))

print(f"Transformation result saved to {output_html_file}")
