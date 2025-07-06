function pm5300EN()
{
    return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">PM5300 Meter Configuration</h2>
  <p>The options can be browsed using the <strong>right button</strong> below the screen, by pressing the right arrow. To select the <strong>Maint</strong> option, press the button located directly under the text "Maint" on the screen. (Note: Only three options are displayed on the screen at a time.)</p>
  <p>Next steps:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Select <strong>Setup</strong>.</li>
    <li>A password input screen will appear (initially filled with zeros). Do not enter anything; simply press <strong>OK</strong>.</li>
    <li>Choose <strong>Meter</strong>, then <strong>Basic</strong>.</li>
  </ol>
  <p>By following these steps, you will enter the meter configuration menu. To set the required parameters:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Locate the <strong>CT Primary</strong> parameter to configure the high value of the current transformer.</li>
    <li>Locate the <strong>CT Secondary</strong> parameter to configure the low value of the transformer.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Meter Verification</h2>
  <p>While in operating mode, on the main screen, browse through the submenus and find <strong>I - current strength</strong>. Open this option and load the phases to check the current strength.</p>
  <p><strong>Important:</strong> The value should be positive. If not, the current transformer is incorrectly connected.</p>
  <p style="font-style: italic; color: #555; margin-top: 20px;">Note: Ensure that all connections and settings comply with the manufacturer's guidelines and safety protocols to avoid equipment damage or inaccurate measurements.</p>
</div>
`;
}