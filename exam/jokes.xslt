<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Jokes</title>
      </head>
      <body>
        <h1>Jokes Collection</h1>
        <table border="1">
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
          <xsl:apply-templates select="jokes/category"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="category">
    <tr>
      <td><xsl:value-of select="."/></td>
      <td><xsl:value-of select="following-sibling::joke[1]"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
